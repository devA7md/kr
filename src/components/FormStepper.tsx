import { FC } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  stepConnectorClasses,
  styled,
  StepConnector,
} from "@mui/material";

import { useGetStepperContext } from "../features/StepperForm/utils/StepperFormContext";
import * as React from "react";

const FormStepper: FC = () => {
  const { steps, currentStep } = useGetStepperContext();

  const Connector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 8,
      left: "calc(-50% + 8px)",
      right: "calc(50% + 8px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.success.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.success.main,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  return (
    <Stepper
      activeStep={currentStep}
      alternativeLabel
      connector={<Connector />}
    >
      {steps
        /**
         * sort the passed steps ascending before mapping
         * */
        .sort((a, b) => (a < b ? 1 : -1))
        .map((entry) => (
          <Step key={entry.index}>
            <StepLabel
              StepIconComponent={({ active, completed }) => {
                return (
                  <Box>
                    {completed && (
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.46354 0.332809C4.67954 0.332809 0.796875 4.21548 0.796875 8.99948C0.796875 13.7835 4.67954 17.6661 9.46354 17.6661C14.2475 17.6661 18.1302 13.7835 18.1302 8.99948C18.1302 4.21548 14.2475 0.332809 9.46354 0.332809ZM7.73021 13.3328L3.39688 8.99948L4.61887 7.77748L7.73021 10.8801L14.3082 4.30214L15.5302 5.53281L7.73021 13.3328Z"
                          fill="#2EE297"
                        />
                      </svg>
                    )}
                    {active && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                          fill="#2EE297"
                        />
                      </svg>
                    )}
                    {!active && !completed && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_322_263)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                            fill="#5E6E78"
                            fill-opacity="0.2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_322_263">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </Box>
                );
              }}
            >
              {entry.title}
            </StepLabel>
          </Step>
        ))}
    </Stepper>
  );
};

export default FormStepper;
