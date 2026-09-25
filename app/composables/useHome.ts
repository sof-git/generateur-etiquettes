interface Menu {
  value: "labels" | "resident";
  label: string;
}

export const useHome = () => {
  const homeTitle = "Générateur d'étiquettes";
  const menu = useState< "labels" | "resident">(
    "menu",
    () => "labels",
  );
  const navigation = ref<Menu[]>([
    {
      value: "labels",
      label: "Générateur d'étiquettes",
    },
    {
      value: "resident",
      label: "Ajouter un résident",
    },
  ]);
  return {
    homeTitle,
    menu,
    navigation,
  };
};
