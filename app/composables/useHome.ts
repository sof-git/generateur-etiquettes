interface Menu {
  value: "home" | "picture" | "labels" | "resident";
  label: string;
}

export const useHome = () => {
  const homeTitle = "Générateur d'étiquettes";
  const menu = useState<"home" | "picture" | "labels" | "resident">(
    "menu",
    () => "home",
  );
  const navigation = ref<Menu[]>([
    {
      value: "home",
      label: "Accueil",
    },
    {
      value: "picture",
      label: "Photos",
    },
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
