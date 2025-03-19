import { useState } from "react";
import { FaMagic, FaPaperPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function SummonContact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSummoning, setIsSummoning] = useState(false);
  const [status, setStatus] = useState({ success: null, message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [success, setSuccess] = useState(false); // Asegurar que está definido
  const [error, setError] = useState(false); // Asegurar que está definido

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // Enviar como FormData
    setIsSummoning(true);
    setSuccess(false);
    setError(false);

    try {
        const response = await fetch("https://lfv-dev.com/send-email.php", {
            method: "POST",
            body: formData, // Usar FormData en vez de JSON
        });

        const data = await response.json();
        if (data.success) {
            setSuccess(true);
            setSuccessMessage(t("summon.success"));
            setForm({ name: "", email: "", message: "" });
            e.target.reset();
        } else {
            setSuccessMessage(t("summon.error"));
            setError(true);
        }
    } catch (err) {
        console.error("Error:", err);
        setError(true);
    }

    setIsSummoning(false);
};



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSummoning(true);
  //   setStatus({ success: null, message: "" });

  //   // Crear FormData para enviar los datos en el formato esperado por PHP
  //   const formData = new FormData();
  //   formData.append("name", form.name);
  //   formData.append("email", form.email);
  //   formData.append("message", form.message);

  //   try {
  //     const response = await fetch("https://lfv-dev.com/send_email.php", {
  //       method: "POST",
  //       body: formData, // Enviar como FormData
  //     });

  //     const data = await response.json();
  //     if (data.success) {
  //       setStatus({ success: true, message: t("summon.success") });
  //       setForm({ name: "", email: "", message: "" });
  //     } else {
  //       setStatus({ success: false, message: t("summon.error") });
  //     }
  //   } catch (err) {
  //     console.error("Error:", err);
  //     setStatus({ success: false, message: t("summon.error") });
  //   }

  //   setIsSummoning(false);
  // };

  return (
    <div className="w-full max-w-l mx-auto bg-gray-800 text-white p-8 rounded-lg shadow-lg border-2 border-purple-500 relative text-center">
      <h2 className="text-3xl font-bold text-purple-400">{t("summon.title")}</h2>
      <p className="text-gray-300 italic">{t("summon.subtitle")}</p>

      {isSummoning && (
        <div className="mt-4 text-yellow-300 text-lg animate-pulse">{t("summon.casting")}</div>
      )}
      {status.success !== null && (
        <div className={`mt-4 text-lg ${status.success ? "text-green-400" : "text-red-400"}`}>
          {status.message}
        </div>
      )}

      {!status.success && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t("summon.name")}
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder={t("summon.email")}
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder={t("summon.message")}
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 rounded bg-gray-700 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            {isSummoning ? (
              <>
                <FaMagic className="animate-spin" /> {t("summon.sending")}
              </>
            ) : (
              <>
                <FaPaperPlane /> {t("summon.button")}
              </>
            )}
          </button>
        </form>
      )}
      {successMessage && <p className="text-success mt-3">{successMessage}</p>}

      <div className="mt-3 justify-center gap-4">
        <div className="mt-6 text-gray-400 text-md">{t("summon.whereToFind")}</div>
        <a
          className="flex p-3 justify-center"
          href="https://www.linkedin.com/in/laura-frias-viana/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
      <p className="mt-6 text-gray-400 text-sm">{t("summon.footer")}</p>
    </div>
  );
}















// <?php
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require 'vendor/autoload.php';

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Allow-Headers: Content-Type");

// $data = json_decode(file_get_contents("php://input"), true);

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = $data["name"];
//     $email = $data["email"];
//     $message = $data["message"];

//     $mail = new PHPMailer(true);
//     try {
//         $mail->isSMTP();
//         $mail->Host = 'smtp.gmail.com';
//         $mail->SMTPAuth = true;
//         $mail->Username = 'contact@lfv-dev.com'; 
//         $mail->Password = 'REL_131208659297';
//         $mail->SMTPSecure = 'tls';
//         $mail->Port = 587;

//         $mail->setFrom($email, $name);
//         $mail->addAddress('tu_correo@gmail.com');

//         $mail->isHTML(true);
//         $mail->Subject = "Nuevo mensaje de $name";
//         $mail->Body = "Mensaje: <br> $message <br><br> Contacto: $email";

//         $mail->send();
//         echo json_encode(["success" => true, "message" => "Correo enviado"]);
//     } catch (Exception $e) {
//         echo json_encode(["success" => false, "message" => "Error: {$mail->ErrorInfo}"]);
//     }
// }
// ?>
