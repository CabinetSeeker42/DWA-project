import * as React from "react";
import * as renderer from "react-test-renderer";
import Webcam from "react-webcam";

test("webcam renders correctly", () => {
  const tree = renderer.create(
    <Webcam
      audio={false}
      className="react-webcam"
      imageSmoothing={false}
      minScreenshotHeight={1000}
      minScreenshotWidth={1000}
      onUserMedia={() => {}}
      onUserMediaError={() => {}}
      style={{ transform: "rotate(180deg)" }}
      videoConstraints={{
        width: 160,
        height: 120,
        frameRate: 15,
      }}
      height={1000}
      width={1000}
    />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});

test("sets <video/> muted to false when props.audio is true for recording audio", () => {
  const tree = renderer.create(
    <Webcam
      audio={true}
      className="react-webcam"
      onUserMedia={() => {}}
      onUserMediaError={() => {}}
      style={{ transform: "rotate(180deg)" }}
      videoConstraints={{
        width: 160,
        height: 120,
        frameRate: 15,
      }}
      height={1000}
      width={1000}
    />
  );

  expect(tree.root.findByType("video").props.muted).toBe(false);
});

test("audio recording is muted", () => {
  const tree = renderer.create(
    <Webcam
      audio={false}
      className="react-webcam"
      onUserMedia={() => {}}
      onUserMediaError={() => {}}
      style={{ transform: "rotate(180deg)" }}
      videoConstraints={{
        width: 160,
        height: 120,
        frameRate: 15,
      }}
      height={1000}
      width={1000}
    />
  );

  expect(tree.root.findByType("video").props.muted).toBe(true);
});
