import { combineReducers } from "redux";

const initializationProdaction = [
  {
    id: Math.random(),
    name: "ChoSet Id_443214_Model_314241",
    type: "North_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_431214_Model_34563441",
    type: "South_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_45435414_Model_3643431",
    type: "South_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_4516344_Model_315146141",
    type: "North_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_754645614_Model_75645611",
    type: "South_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_43456314_Model_67163441",
    type: "North_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_6754645_Model_143351",
    type: "South_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_63254314_Model_5145434241",
    type: "North_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_51464_Model_614354341",
    type: "North_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_5134534_Model_6435341",
    type: "South_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_34534514_Model_64354141",
    type: "North_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_51452341_Model_5324234211",
    type: "South_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_1241512_Model_1441254121",
    type: "North_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_412321_Model_4124121",
    type: "North_Brodge_Chip"
  },
  {
    id: Math.random(),
    name: "ChoSet Id_41234214_Model_341241251",
    type: "South_Brodge_Chip"
  }
];

const initializationClient = [
  {
    id: Math.random(),
    name: "Petro Ivanovych",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Dmytro Pavlovich",
    type: "VIP"
  },

  {
    id: Math.random(),
    name: "Oleksand Evhenovich",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Andrij Leonidovych",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Roman Orestowych",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Mkolaj Dmitrovich",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Dominik Romanovych",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Oleg Josupovych",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Igor Artemovych",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Taras Mykolajovych",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Oleksij Vjetnamovych",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Pawel Petrovych",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Radoslaw Bogdanowych",
    type: "VIP"
  },
  {
    id: Math.random(),
    name: "Bogdan Viniaminowych",
    type: "VIP"
  }
];

const prodactionReducer = (state = initializationProdaction, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

const clientReducer = (state = initializationClient, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  product: prodactionReducer,
  client: clientReducer
});
