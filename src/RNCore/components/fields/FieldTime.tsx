import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import tw from "../../libs/tailwind";

interface ITimeField {
    class?: string // tailwind classes
    value: string | null // Если не задано отображаем --:--
    onChange?: (time: string) => void // событие должно вызываться при снятии фокуса с компонента.
    useButtons?: boolean // если true - отображаем кнопки "<" слева и справа ">" + или - 1 час соответственно
}

export function FieldTime(props: ITimeField) {
    const [time, setTime] = useState<string | null>(props.value);

    const handleBlur = () => {
        if (props.onChange) {
            props.onChange(time || "");
        }
    };

    const handleTimeChange = (newTime: string) => {
        setTime(newTime);
    };

    const incrementHour = () => {
        if (time) {
            const [ hours, minutes] = time.split(":");
            const newHours = parseInt(hours, 10) + 1;
            const newTime = `${newHours.toString().padStart(2, "0")}:${minutes}`;
            setTime(newTime);
        }
    };

    const decrementHour = () => {
        if (time) {
            const [ hours, minutes] = time.split(":");
            const newHours = parseInt(hours, 10) - 1;
            const newTime = `${newHours.toString().padStart(2, "0")}:${minutes}`;
            setTime(newTime);
        }
    };

    return (
      <View style={tw`${props.class || ""}`}>
          {props.useButtons && (
            <View style={tw`flex-row items-center justify-center`}>
                <TouchableOpacity onPress={decrementHour}>
                    <FontAwesomeIcon icon={faChevronLeft} size={20} />
                </TouchableOpacity>
                <TextInput
                  style={tw`text-xl text-center`}
                  value={time || ""}
                  onChangeText={handleTimeChange}
                  onBlur={handleBlur}
                  keyboardType="numeric"
                />
                <TouchableOpacity onPress={incrementHour}>
                    <FontAwesomeIcon icon={faChevronRight} size={20} />
                </TouchableOpacity>
            </View>
          )}
          {!props.useButtons && (
            <TextInput
              style={tw`text-xl text-center`}
              value={time || ""}
              onChangeText={handleTimeChange}
              onBlur={handleBlur}
              keyboardType="numeric"
            />
          )}
      </View>
    );
}

