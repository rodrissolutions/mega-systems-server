import PDFDocument from "pdfkit";

const generarFacturaPDF = (pedido) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const buffers = [];

    doc.on("data", (chunk) => buffers.push(chunk));
    doc.on("end", () => {
      const pdfBuffer = Buffer.concat(buffers);
      resolve(pdfBuffer);
    });
    doc.on("error", reject);

    // Genera contenido PDF
    doc.fontSize(20).text("Factura de Compra", { align: "center" });
    doc.moveDown();

    doc.fontSize(12).text(`Método de Pago: ${pedido.paymentMethod}`);
    doc.text(`Tipo de Compra: ${pedido.typeBuy}`);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`);
    doc.text(`Tipo de Entrega: ${pedido.Delivery.typeDelivery}`);
    doc.text(`Recargo de Entrega: $${pedido.Delivery.surchage}`);
    doc.moveDown();

    doc.fontSize(14).text("Productos:");
    doc.moveDown(0.5);
    pedido.Cart.Items.forEach((item, index) => {
      doc
        .fontSize(12)
        .text(`${index + 1}. ${item.Product.name} - $${item.Product.price}`, {
          indent: 20,
        });
    });
    doc.moveDown();

    doc.text(`Subtotal: $${pedido.subTotal}`);
    doc.text(
      `Descuento (${pedido.disccountType}): ${pedido.disccountValue}${
        pedido.disccountType === "Porcentaje" ? "%" : ""
      }`
    );
    doc.text(`Total: $${pedido.total}`);

    doc.end();
  });
};

export default {
  generarFacturaPDF,
};
