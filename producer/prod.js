const Kafka = require('node-rdkafka');
const prompt = require('prompt-sync')({sigint: true});
const avro = require('avsc');
const eventType = avro.Type.forSchema({
  type: 'record',
  fields: [
    {
      name: 'someWords',
      type: 'string',
    }
  ]
})

const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list': 'localhost:9092'
}, {}, {
  topic: 'test'
});

stream.on('error', (err) => {
  console.error('Error in our kafka stream');
  console.error(err);
});

function queueRandomMessage() {
    let msg = prompt("send a message: ")
    let obj = {'someWords': msg}
    const success = stream.write(eventType.toBuffer(obj));     
    if (success) {
      console.log(`message queued (${JSON.stringify(obj)})`);
    } else {
      console.log('Too many messages in the queue already..');
    }

}

queueRandomMessage()
setInterval(() => {
  queueRandomMessage();
}, 1000);
