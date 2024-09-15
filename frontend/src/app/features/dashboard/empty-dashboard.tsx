import { Button } from "@headlessui/react";

const EmptyDashboard = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-dark text-title">There&apos;s nothing here!</h1>
      <h1 className="text-dark text-title">Let&apos;s fix that.</h1>
      <Button
        className="rounded-lg px-5 py-3 text-button-lg text-white bg-primary
                data-[hover]:bg-primary-hover"
      >
        Create New Taikai
      </Button>
    </div>
  );
};

export default EmptyDashboard;
