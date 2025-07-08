
import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import jsPDF from 'jspdf';
import emailjs from 'emailjs-com';

export default function ContractForm() {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    eventDate: '',
    eventAddress: '',
    services: [],
  });

  const sigCanvas = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pdf = new jsPDF();
    pdf.text(`DJ Gee Contract`, 20, 20);
    pdf.text(`Name: ${formData.clientName}`, 20, 30);
    pdf.text(`Email: ${formData.email}`, 20, 40);
    pdf.text(`Event Date: ${formData.eventDate}`, 20, 50);
    pdf.text(`Event Address: ${formData.eventAddress}`, 20, 60);
    pdf.text(`Services: ${formData.services.join(', ')}`, 20, 70);
    const imgData = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 20, 80, 100, 30);
    const pdfBlob = pdf.output('blob');

    const formDataEmail = new FormData();
    formDataEmail.append('user_name', formData.clientName);
    formDataEmail.append('user_email', formData.email);
    formDataEmail.append('event_date', formData.eventDate);
    formDataEmail.append('file', pdfBlob, 'contract.pdf');

    emailjs.send('service_koec6hs', 'template_xbg6lx3', {
      user_name: formData.clientName,
      user_email: formData.email,
      event_date: formData.eventDate,
    }, 'HSPjqlSb3XJ-y-rqD')
    .then(() => alert('Contract sent!'))
    .catch(() => alert('Failed to send email'));
  };

  return (
    <div className="max-w-2xl mx-auto p-8 text-black bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Service Contract Form</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="clientName"
          placeholder="Client Name"
          className="p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="eventDate"
          type="date"
          className="p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="eventAddress"
          placeholder="Event Address"
          className="p-2 border rounded"
          onChange={handleChange}
          required
        />
        <fieldset className="border p-4 rounded">
          <legend className="font-semibold">Select Services:</legend>
          {['DJ', 'MC', 'Lighting', 'Karaoke', 'Just music'].map((service) => (
            <label key={service} className="block">
              <input
                type="checkbox"
                name="services"
                value={service}
                onChange={handleChange}
              />{' '}{service}
            </label>
          ))}
        </fieldset>
        <div>
          <p className="font-semibold mb-1">Signature:</p>
          <SignatureCanvas
            ref={sigCanvas}
            canvasProps={{ className: 'border w-full h-32' }}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white font-bold py-2 rounded hover:bg-purple-700"
        >
          Submit Contract
        </button>
      </form>
    </div>
  );
}
