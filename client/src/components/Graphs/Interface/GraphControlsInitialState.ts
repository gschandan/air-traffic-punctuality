import { GraphControlState } from "./Types/graphControlTypes";

export const controlLabels = {
  dataset: "Select Dataset:",
  graphType: "Select Graph Type:",
  xaxis: "Select X Axis:",
  yaxis: "Select Y Axis:",
} as const;

export const graphControlsInitialState: GraphControlState = {
  controls: [
    {
      width: "10vw",
      label: controlLabels.dataset,
      selectOptions: [
        {
          value: "combined",
          text: "Combined",
        },
        {
          value: "scheduled",
          text: "Scheduled",
        },
        {
          value: "chartered",
          text: "Chartered",
        },
      ],
      selectedOption: {
        value: "combined",
        text: "Combined",
      },
    },
    {
      width: "10vw",
      label: controlLabels.graphType,
      selectOptions: [
        {
          value: "bar",
          text: "Bar",
        },
        {
          value: "line",
          text: "Line",
        },
      ],
      selectedOption: {
        value: "bar",
        text: "Bar",
      },
    },
    {
      width: "10vw",
      label: controlLabels.xaxis,
      selectOptions: [
        {
          value: "month",
          text: "Month",
        },
        {
          value: "airport",
          text: "Airport",
        },
      ],
      selectedOption: {
        value: "airport",
        text: "Airport",
      },
    },
    {
      width: "10vw",
      label: controlLabels.yaxis,
      selectOptions: [
        {
          value: "average-delay",
          text: "Average Delay",
        },
        {
          value: "delay-by-range",
          text: "Delay Range",
        },
      ],
      selectedOption: {
        value: "average-delay",
        text: "Average Delay",
      },
    },
  ],
};
