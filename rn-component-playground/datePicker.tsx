import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
};

export default function FormScreen() {
    const [dob, setDob] = useState<Date | null>(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<number | null>(null);
    const [items, setItems] = useState([
        { label: '12', value: 12 },
        { label: '14', value: 14 },
        { label: '16', value: 16 },
        { label: '18', value: 18 },
        { label: '20', value: 20 },
    ]);

    const handleConfirm = (date: Date) => {
        setDob(date);
        setDatePickerVisibility(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Date of Birth</Text>
                <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
                    <Text style={styles.inputText}>
                        {dob ? formatDate(dob) : 'Select Date'}
                    </Text>
                </TouchableOpacity>
            </View>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={() => setDatePickerVisibility(false)}
                maximumDate={new Date()}
            />

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Font Size</Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Select Font Size"
                    style={styles.dropdown}
                    dropDownContainerStyle={styles.dropdownContainer}
                    textStyle={styles.dropdownText}
                    listMode="SCROLLVIEW"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    inputContainer: {
        marginBottom: 24,
        zIndex: 10, 
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    inputText: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        color: '#000',
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 16,
        height: 52,
        backgroundColor: '#fff',
    },
    dropdownContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    dropdownText: {
        fontSize: 16,
        color: '#000',
    },
});
