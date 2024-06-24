const ffmpeg = require('fluent-ffmpeg');

// RTSP stream URL and output file path
const streamUrl = "rtsp://username:password@CameraIP:554/stream1";
const outputFilePath = './output.jpg';

ffmpeg(streamUrl)
  .inputOptions('-rtsp_transport', 'tcp')
  .output(outputFilePath)
  .frames(1)
  .on('end', () => {
      console.log('Screenshot taken and saved to', outputFilePath);
  })
  .on('error', (err) => {
      console.error('Error taking screenshot:', err.message);
  })
  .run();
