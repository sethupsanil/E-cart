type AsyncFunction<T, R> = (arg?: T) => Promise<R>;
type UseAppWriteReturn<R> = {
  data: R[];
  loading: boolean;
  refetch: (arg?: any) => void;
};

export { AsyncFunction, UseAppWriteReturn };
