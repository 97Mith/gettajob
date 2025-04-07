// src/pages/Calendar/index.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import styles from '../../styles/CalendarStyles';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ],
  dayNames: [
    'Domingo', 'Segunda', 'Terça', 'Quarta',
    'Quinta', 'Sexta', 'Sábado'
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarPage() {
  const [selected, setSelected] = useState('');

  const availability = {
    '2025-04-01': { color: 'green', text: 'Livre das 8h às 12h' },
    '2025-04-02': { color: 'green', text: 'Livre das 8h às 12h' },
    '2025-04-03': { color: 'red', text: 'Sem horário' },
    '2025-04-04': { color: 'red', text: 'Sem horário' },
    '2025-04-05': { color: 'red', text: 'Sem horário' },
    '2025-04-06': { color: 'gray', text: 'Folga' },
    '2025-04-14': { color: 'green', text: 'Até 14h' },
    '2025-04-16': { color: 'green', text: 'Disponível' },
    '2025-04-28': { color: 'green', text: 'Disponível' },
  };

  // Marcação com pontinhos (dot)
  const markedDates = Object.keys(availability).reduce((acc, date) => {
    acc[date] = {
      dots: [{ color: availability[date].color }],
    };
    return acc;
  }, {});

  // Se tiver uma data selecionada, adiciona marcação especial nela
  if (selected !== '') {
    markedDates[selected] = {
      ...markedDates[selected],
      selected: true,
      selectedColor: '#00adf5',
    };
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>

      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={markedDates}
        markingType={'multi-dot'}
        theme={{
          todayTextColor: '#00adf5',
          arrowColor: '#00adf5',
        }}
      />

      {selected !== '' && (
        <Text style={styles.info}>Data selecionada: {selected} {'\n'}
          {availability[selected]?.text || 'Sem descrição'}
        </Text>
      )}
    </View>
  );
}
