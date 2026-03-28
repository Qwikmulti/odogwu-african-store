"use client";

export default function MapEmbed() {
  return (
    <div className="w-full h-80 rounded-2xl overflow-hidden border border-[#E5E2D9]">
      <iframe
        title="Odogwu African Shop Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.3!2d0.5!3d51.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIxJzAwLjEiTiAwwrAyOScwMC40IkU!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
