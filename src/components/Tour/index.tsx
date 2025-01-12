import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { FloatButton } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
const TourComponent = () => {
  const startTour = () => {
    const driverObj = driver({
      nextBtnText: '▶️',
      prevBtnText: ' ◀️',
      popoverClass: "driverjs-theme",
      showProgress: true,
      steps: [
        {
          popover: {
            title: "Bem vindo!",
            description: "aqui você pode fazer seus cálculos rapídamente!",
            side: "over",
            align: "center",
          },
        },
        {
          popover: {
            title: "Área de Informações",
            description:
              "Aqui mostramos informações sobre o mês atual, incluindo receita e despesa.",
            side: "top",
            align: "end",
          },
        },
        {
          element: "#input-area",
          popover: {
            title: "Área de Entrada",
            description:
              "Aqui você pode adicionar novos itens à sua lista de despesas ou receitas. Não se esqueça de selecionar  o mês correto!",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#table-area",
          popover: {
            title: "Tabela de Itens",
            description: "Esta tabela lista todos os itens que você adicionou.",
            side: "bottom",
            align: "end",
          },
        },
        {
          element: "#chart",
          popover: {
            title: "Gráficos",
            description:
              "Aqui você pode ver gráficos que mostram suas finanças de forma visual.",
            side: "over",
            align: "center",
          },
        },
        {
          popover: { title: "E isso é tudo!", description: "aproveite!" },
        },
      ],
    });
    driverObj.drive();
  };

  return (
    <div>
      <FloatButton
        onClick={startTour}
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{ insetInlineEnd: 24 }}
      />
    </div>
  );
};

export default TourComponent;
