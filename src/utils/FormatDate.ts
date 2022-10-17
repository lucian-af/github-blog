import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateFormatted = (date: number | Date) =>
  format(date, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

export const dateRelativeToNow = (date: number | Date) =>
  formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
