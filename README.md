# Node RTSP Snapshot

This Node.js script captures a screenshot from an RTSP security camera stream (e.g., TP-Link Tapo C200) using fluent-ffmpeg.

### Requirements:

Node.js & npm
fluent-ffmpeg (npm install fluent-ffmpeg)
#### How to Use:

- Edit script.js:

- Replace streamUrl with your camera's RTSP URL (username:password@IP:port/stream)
- Replace outputFilePath with your desired filename (e.g., ./screenshot.jpg)
Run the script:

- Open a terminal and run node index.js
#### Success:

- Script captures a single frame and saves it as a JPEG.
#### Errors:

- Error messages will be logged to the console.
#### Note:

Captures only the first frame.
Consider error handling and scheduling for real-world use.

### Compatibility:

Tested with TP-Link Tapo C200, should work with other RTSP cameras (check documentation).
### Disclaimer:

Educational purposes only. Ensure proper permissions to access the camera stream.
