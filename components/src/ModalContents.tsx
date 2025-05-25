import ModalExample from './ModalExample';

function ModalContents() {
  return (
    <div className="button-container">
      <ModalExample
        type="중앙(size 미지정)"
        modalPosition="center"
        closeType="top"
        titleText="titleText"
      >
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
      </ModalExample>

      <ModalExample
        type="하단(상단 닫기)"
        modalPosition="bottom"
        closeType="top"
        titleText="titleText"
      >
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
      </ModalExample>

      <ModalExample
        type="하단(하단 닫기)"
        modalPosition="bottom"
        closeType="bottom"
        colorType="black"
        titleText="titleText"
      >
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
      </ModalExample>
    </div>
  );
}

export default ModalContents;
