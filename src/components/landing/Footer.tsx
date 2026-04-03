const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold">
            <span className="gradient-text-orange">Follow</span>PerView
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FollowPerView. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
