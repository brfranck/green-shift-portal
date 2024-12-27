import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { jsPDF } from 'jspdf';

interface Project {
  title: string;
  description: string;
  impacts: string[];
  testimonial: {
    quote: string;
    author: string;
  };
  type: string;
  location: string;
  year: string;
}

export const exportToWord = async (projects: Project[]) => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: projects.flatMap(project => [
        new Paragraph({
          children: [new TextRun({ text: project.title, bold: true, size: 28 })],
        }),
        new Paragraph({
          children: [new TextRun({ text: `Type: ${project.type}` })],
        }),
        new Paragraph({
          children: [new TextRun({ text: `Location: ${project.location}` })],
        }),
        new Paragraph({
          children: [new TextRun({ text: `Année: ${project.year}` })],
        }),
        new Paragraph({
          children: [new TextRun({ text: project.description })],
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Impacts:', bold: true })],
        }),
        ...project.impacts.map(impact => 
          new Paragraph({
            children: [new TextRun({ text: `• ${impact}` })],
          })
        ),
        new Paragraph({
          children: [new TextRun({ text: 'Témoignage:', bold: true })],
        }),
        new Paragraph({
          children: [new TextRun({ text: `"${project.testimonial.quote}" - ${project.testimonial.author}` })],
        }),
        new Paragraph({
          children: [new TextRun({ text: '' })],
        }),
      ]),
    }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, 'projets-greenshift.docx');
};

export const exportToPDF = (projects: Project[]) => {
  const doc = new jsPDF();
  let y = 20;

  projects.forEach((project, index) => {
    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(project.title, 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Type: ${project.type}`, 20, y);
    y += 7;
    doc.text(`Location: ${project.location}`, 20, y);
    y += 7;
    doc.text(`Année: ${project.year}`, 20, y);
    y += 10;

    const descriptionLines = doc.splitTextToSize(project.description, 170);
    doc.text(descriptionLines, 20, y);
    y += descriptionLines.length * 7 + 5;

    doc.setFont('helvetica', 'bold');
    doc.text('Impacts:', 20, y);
    y += 7;
    doc.setFont('helvetica', 'normal');
    project.impacts.forEach(impact => {
      doc.text(`• ${impact}`, 25, y);
      y += 7;
    });
    y += 5;

    doc.setFont('helvetica', 'bold');
    doc.text('Témoignage:', 20, y);
    y += 7;
    doc.setFont('helvetica', 'normal');
    const testimonialText = `"${project.testimonial.quote}" - ${project.testimonial.author}`;
    const testimonialLines = doc.splitTextToSize(testimonialText, 170);
    doc.text(testimonialLines, 20, y);
    y += testimonialLines.length * 7 + 15;
  });

  doc.save('projets-greenshift.pdf');
};