const urlImg =
  "https://th.bing.com/th/id/OIP.tsAQp62goCuROpSVjYT-BQAAAA?rs=1&pid=ImgDetMain";

const IMGS = [
  "https://www.shutterstock.com/image-photo/super-cool-dude-wears-sunglasses-600w-1537930565.jpg",
  "https://www.alcoolismo.com.br/wp-content/uploads/2014/12/como-parar-de-beber-7-dic.jpeg",
];
function Motivos() {
  return (
    <div>
      <h1>Motivos para não utilizar drogas e beber</h1>
      <>
        <img className="imagem" src={IMGS[0]} />
        <img className="imagem" src={IMGS[1]} />
        {/* <img className="imagem" src={"https://i.redd.it/9dv8crdmbo511.jpg"} /> */}
      </>
      <div
        style={{
          backgroundColor: "hsl(0, 3%, 60%)",
          width: "100%",
          height: "100%",
        }}
      >
        <h1>MOTIVOS PARA NÃO BEBER!</h1>
        <h2>OLHE PARA ESSE CARA COMO ELE PARECE LEGAL.</h2>
        <h2>NÃO BEBA E NÃO USE DROGA E ALGUM DIA, SEJA QUE NEM ELE!!</h2>
      </div>
      <h1> CLIQUE NESSE CARA P FAZER ELE A BEBER AGUA E FUGIR DAS DROGAS</h1>
      <a href="/contato">
        <img
          className="imagem"
          src={
            "data:image/jpeg;base64,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"
          }
        />
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Motivos;
