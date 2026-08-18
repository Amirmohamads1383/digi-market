import React, { useState } from "react";
import { toast } from "sonner";

export default function Form() {
  const datas = [
    {
      id: 1,
      title: "پاسخگویی سریع و دقیق",
    },
    {
      id: 2,
      title: "تیم پشتیبانی حرفه ای و مجرب",
    },
    {
      id: 3,
      title: "راه های ارتباطی متنوع",
    },
    {
      id: 4,
      title: "رضایت شما اولویت ماست",
    },
  ];

  /* States */
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* Clear Form */
  const clearForm = () => {
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");
  };

  /* Validate Form */
  const validateForm = () => {
    if (!fullName.trim()) {
      toast.error("لطفاً نام و نام خانوادگی خود را وارد کنید.");
      return false;
    }

    if (!phoneNumber.trim()) {
      toast.error("لطفاً شماره موبایل خود را وارد کنید.");
      return false;
    }

    if (!/^09\d{9}$/.test(phoneNumber)) {
      toast.error("شماره موبایل وارد شده صحیح نیست.");
      return false;
    }

    if (!email.trim()) {
      toast.error("لطفاً ایمیل خود را وارد کنید.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("فرمت ایمیل صحیح نیست.");
      return false;
    }

    if (!message.trim()) {
      toast.error("لطفاً متن پیام را وارد کنید.");
      return false;
    }

    return true;
  };

  /* Submit Form */
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("پیام شما با موفقیت ارسال شد.");

      clearForm();
      setIsSubmitting(false);
    }, 1500);
  };

  /* Phone Number Handler */
  const handlePhoneChange = (event) => {
    const value = event.target.value;

    const onlyNumbers = value.replace(/\D/g, "");

    if (onlyNumbers.length <= 11) {
      setPhoneNumber(onlyNumbers);
    }
  };

  return (
    <section className="container pt-10 md:pt-12 lg:pt-16">
      <div className="flex flex-col-reverse lg:flex-row items-start gap-6">
        {/* Right / Image Section */}
        <div className="w-full lg:w-1/2 py-5 flex flex-col items-center justify-center gap-5 bg-Primary/5 rounded-2xl">
          <img
            src="/image/contact-us/contact.webp"
            className="w-2/3"
            alt="تماس با ما"
          />
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-xl font-bold text-Title">
              چرا با ما در ارتباط باشید؟
            </h3>
            <ul className="flex flex-col items-start gap-4">
              {datas.map((data) => (
                <li
                  key={data.id}
                  className="text-sm font-semibold flex items-center gap-2 text-Title"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-Primary shrink-0"
                  >
                    <path
                      d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m4.78 7.7-5.67 5.67a.75.75 0 0 1-1.06 0l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0s.29.76 1.06 1.06"
                      fill="currentColor"
                    />
                  </svg>

                  {data.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 p-4 bg-white border border-Caption/35 rounded-2xl">
          <h3 className="text-lg font-bold text-Title">فرم تماس با ما</h3>
          <span className="font-medium text-sm md:text-base text-Title">
            لطفا اطلاعات خود را وارد کنید تا با شما تماس بگیریم
          </span>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            {/* Name + Phone */}
            <div className="flex flex-col md:flex-row items-start gap-4">
              {/* Full Name */}
              <div className="flex flex-col items-start gap-1 w-full md:w-1/2">
                <label
                  className="text-sm font-semibold text-Title"
                  htmlFor="fullName"
                >
                  نام و نام خانوادگی
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="نام و نام خانوادگی خود را وارد کنید."
                  className="font-semibold p-3 w-full placeholder:text-Caption placeholder:text-xs md:placeholder:text-sm placeholder:font-normal bg-white text-Title outline-0 border border-Caption/35 rounded-xl focus:border-Primary transition"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col items-start gap-1 w-full md:w-1/2">
                <label
                  className="text-sm font-semibold text-Title"
                  htmlFor="phoneNumber"
                >
                  شماره موبایل
                </label>

                <input
                  id="phoneNumber"
                  type="tel"
                  inputMode="numeric"
                  maxLength={11}
                  placeholder="شماره موبایل خود را وارد کنید."
                  className="font-semibold p-3 w-full placeholder:text-Caption placeholder:text-xs md:placeholder:text-sm placeholder:font-normal bg-white text-Title outline-0 border border-Caption/35 rounded-xl focus:border-Primary transition"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-start gap-1">
              <label
                className="text-sm font-semibold text-Title"
                htmlFor="email"
              >
                ایمیل
              </label>

              <input
                id="email"
                type="email"
                placeholder="ایمیل خود را وارد کنید."
                className="font-semibold p-3 w-full placeholder:text-Caption placeholder:text-xs md:placeholder:text-sm placeholder:font-normal bg-white text-Title outline-0 border border-Caption/35 rounded-xl focus:border-Primary transition"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col items-start gap-1">
              <label
                className="text-sm font-semibold text-Title"
                htmlFor="message"
              >
                متن پیام
              </label>

              <textarea
                id="message"
                placeholder="پیام خود را اینجا وارد کنید"
                className="font-semibold p-3 w-full h-40 resize-none placeholder:text-Caption placeholder:text-xs md:placeholder:text-sm placeholder:font-normal bg-white text-Title outline-0 border border-Caption/35 rounded-xl focus:border-Primary transition"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 py-3 font-bold text-white hover:text-Primary bg-Primary hover:bg-white border border-Primary transition-all rounded-xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}

              {!isSubmitting && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="m7.4 6.32 8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.02-5.01 0-6.92m2.71 7.33 3.58-3.59"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
