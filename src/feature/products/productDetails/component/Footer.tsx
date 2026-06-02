"use client";

export function Footer() {
  return (
    <footer className="mt-10 bg-white py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid gap-8 text-sm text-muted-foreground md:grid-cols-4">
        <div>
          <h3 className="mb-3 font-bold text-foreground">سیوان لند</h3>
          <p className="leading-7">
            مرجع تامین مصالح ساختمانی، مقایسه تامین کنندگان و خرید مطمئن برای پروژه های ساختمانی.
          </p>
        </div>
        {['دسترسی سریع', 'درباره خدمات ما', 'پشتیبانی'].map((title) => (
          <div key={title}>
            <h3 className="mb-3 font-bold text-foreground">{title}</h3>
            <ul className="space-y-2">
              <li>خدمات</li>
              <li>مجله</li>
              <li>تماس با ما</li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
