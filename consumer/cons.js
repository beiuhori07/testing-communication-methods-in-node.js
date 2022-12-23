const Kafka = require('node-rdkafka');
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

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka',
  'metadata.broker.list': 'localhost:9092',
}, {});

consumer.connect();

consumer.on('ready', () => {
  console.log('consumer ready..')
  consumer.subscribe(['test']);
  consumer.consume();
}).on('data', function(data) {
  console.log(`received message: ${eventType.fromBuffer(data.value)}`);
});
