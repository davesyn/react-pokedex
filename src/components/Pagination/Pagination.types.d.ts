type PaginationProps = {
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  page: number;
  totPages: number;
  onLimitChange: (limit: number) => void;
};
