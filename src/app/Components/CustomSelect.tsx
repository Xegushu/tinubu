import * as React from 'react';
import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    TextField,
} from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions<BrokerOptionType>();

export default function CustomSelect({ value, setValue }: CustomSelectProps) {
    const [open, toggleOpen] = React.useState(false);
    const [dialogValue, setDialogValue] = React.useState({
        legalName: '',
        address: '',
        city: '',
        country: '',
    });

    const handleClose = () => {
        setDialogValue({
            legalName: '',
            address: '',
            city: '',
            country: '',
        });
        toggleOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValue(dialogValue);
        handleClose();
    };

    return (
        <>
            <Autocomplete
                value={value}
                options={brokers}
                onChange={(event, newValue) => {
                    if (newValue && newValue.isCreateNew) {
                        // timeout to avoid instant validation of the dialog's form.
                        setTimeout(() => {
                            toggleOpen(true);
                            setDialogValue({
                                legalName: '',
                                address: '',
                                city: '',
                                country: '',
                            });
                        });
                    } else {
                        setValue(newValue);
                    }
                }}
                renderInput={(params) => <TextField {...params} label="Name" />}
                renderOption={(props, option) => <li key={option.legalName} {...props}>{option.legalName}</li>}
                getOptionLabel={(option) => {
                    // e.g. value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option;
                    }
                    return option.legalName;
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    filtered.push({
                        isCreateNew: true,
                        legalName: `or Add manually`,
                    });

                    return filtered;
                }}
                isOptionEqualToValue={() => {
                    return true;
                }}
                selectOnFocus
                clearOnBlur
            />
            <Dialog open={open} onClose={handleClose} >
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Add manually</DialogTitle>
                    <TextField
                        autoFocus
                        id='name'
                        value={dialogValue.legalName}
                        onChange={(event) =>
                            setDialogValue({
                                ...dialogValue,
                                legalName: event.target.value,
                            })
                        }
                        label="Legal name"
                        type="text"
                    />
                    <TextField
                        autoFocus
                        id='address'
                        value={dialogValue.address}
                        onChange={(event) =>
                            setDialogValue({
                                ...dialogValue,
                                address: event.target.value,
                            })
                        }
                        label="Address"
                        type="text"
                    />
                    <TextField
                        autoFocus
                        id='city'
                        value={dialogValue.city}
                        onChange={(event) =>
                            setDialogValue({
                                ...dialogValue,
                                city: event.target.value,
                            })
                        }
                        label="City"
                        type="text"
                    />
                    <TextField
                        autoFocus
                        id='country'
                        value={dialogValue.country}
                        onChange={(event) =>
                            setDialogValue({
                                ...dialogValue,
                                country: event.target.value,
                            })
                        }
                        label="Country"
                        type="text"
                    />
                    <DialogActions>
                        <Button onClick={handleClose}>CANCEL</Button>
                        <Button type="submit">SAVE</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}

interface CustomSelectProps {
    value: BrokerOptionType | null;
    setValue: (arg0: BrokerOptionType | null) => void;
}

export interface BrokerOptionType {
    isCreateNew?: boolean;
    legalName: string;
    address?: string;
    city?: string;
    country?: string;
}

const brokers: readonly BrokerOptionType[] = [
    {
        legalName: 'RobCo Industries',
        address: '1785 Railway St',
        city: 'Kenora, ON P9N 0B5',
        country: 'Canada',
    },
    {
        legalName: 'Record Brokers',
        address: '1 Rue de la Paix',
        city: 'Paris',
        country: 'France',
    },
];