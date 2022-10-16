import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { debounce } from "lodash";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

type SearchFormProps = {
  filter: (query: string) => void;
};

export function SearchForm({ filter }: SearchFormProps) {
  const { register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearch(data: string) {
    filter(data);
  }

  return (
    <SearchFormContainer onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query", {
          onChange: debounce((e) => handleSearch(e.target.value), 1000),
        })}
      />
    </SearchFormContainer>
  );
}
