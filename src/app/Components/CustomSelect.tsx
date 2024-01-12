import * as React from 'react';
import {
    Autocomplete,
    Box,
    TextField,
    Typography,
} from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';
import BrokerDialog from './BrokerDialog';

const filter = createFilterOptions<BrokerOptionType>();

export default function CustomSelect({ value, setValue }: CustomSelectProps) {
    const [open, toggleOpen] = React.useState(false);

    return (
        <>
            <Autocomplete
                value={value}
                options={brokers}
                onChange={(event, newValue) => {
                    if (newValue && newValue.isCreateNew) {
                        toggleOpen(true); 
                    } else {
                        setValue(newValue);
                    }
                }}
                renderInput={(params) => <TextField {...params} label="Name" />}
                renderOption={(props, option) => {
                    if (option.isCreateNew) {
                        return (
                            <li key='createNew' {...props}>
                                <Box>Or <Typography sx={{ textDecoration: 'underline' }} display="inline">Add manually</Typography></Box>
                            </li>
                        )
                    }
                    return <li key={option.legalName} {...props}>{option.legalName}</li>
                }}
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
                sx={{ marginBottom: 2 }}
            />
            <BrokerDialog
                open={open}
                toggleOpen={(open) => toggleOpen(open)}
                returnValue={(item) => setValue(item)}
            />
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