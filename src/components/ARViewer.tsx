import '@google/model-viewer';

interface ARViewerProps { /* … */ }

const ARViewer = ({ modelPath, altText, height }: ARViewerProps) => (
  <model-viewer
    src={modelPath}
    alt={altText}
    ar
    ar-modes="scene-viewer quick-look webxr"
    auto-rotate
    camera-controls
    style={{ width: '100%', height }}
  />
);

export default ARViewer;
