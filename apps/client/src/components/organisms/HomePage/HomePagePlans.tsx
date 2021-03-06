import {
  HomePagePlansContainer,
  HomePagePlansFlexContainer,
  HomePagePlanTitle,
} from "elements";
import { useStore } from "state";
import { PlanCard } from "../molecules";

export const HomePagePlans: React.FC = () => {
  const {
    plans,
  } = useStore((state: any) => ({
    plans: state?.plans,
  }));

  return (
    <HomePagePlansContainer>
      <HomePagePlanTitle>جدیدترین طرح ها</HomePagePlanTitle>
      <HomePagePlansFlexContainer>
        {plans?.map((plan) => <PlanCard key={plan?._id} plan={plan} />)}
      </HomePagePlansFlexContainer>
    </HomePagePlansContainer>
  );
};
