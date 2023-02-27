import { useState } from "react";
import { ControlledModal } from "../components/CotrolledUncontolledComponents/ControlledModal";
import { ControlledOnboardingFlow } from "../components/CotrolledUncontolledComponents/ControlledOnboardingFlow";
import { UncontrolledOnboardingFlow } from "../components/CotrolledUncontolledComponents/UncontrolledOnboardingFlow";
import StepOne from "../components/CotrolledUncontolledComponents/StepOne";
import StepTwo from "../components/CotrolledUncontolledComponents/StepTwo";
import StepThree from "../components/CotrolledUncontolledComponents/StepThree";

const CotrolledUncontolledComponents = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  const onFinish = () => {
    alert("Onboarding complete!");
  };

  return (
    <>
      <section>
        <ControlledModal
          shouldShow={shouldShowModal}
          onRequestClose={() => setShouldShowModal(false)}
        >
          <h1 style={{ color: "red" }}>Hello from modal!</h1>
        </ControlledModal>
        <button onClick={() => setShouldShowModal(!shouldShowModal)}>
          {shouldShowModal ? "Hide Modal" : "Show Modal"}
        </button>
      </section>

      <section>
        <h1>Uncontrolled</h1>
        <UncontrolledOnboardingFlow
          onFinish={(data) => {
            console.log(data);
            alert("Onboarding complete!");
          }}
        >
          <StepOne />
          <StepTwo />
          <StepThree />
        </UncontrolledOnboardingFlow>
      </section>

      <section>
        <h1>Controlled</h1>

        <ControlledOnboardingFlow
          currentIndex={currentIndex}
          onNext={onNext}
          onFinish={onFinish}
        >
          <StepOne />
          <StepTwo />
          <StepThree />
        </ControlledOnboardingFlow>
      </section>
    </>
  );
};

export default CotrolledUncontolledComponents;
