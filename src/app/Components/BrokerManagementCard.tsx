import * as React from 'react';
import { Autocomplete, Box, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material';
import CustomSelect, { BrokerOptionType } from './CustomSelect';

export default function BrokerManagementCard() {
    const [brokerValue, setBrokerValue] = React.useState<BrokerOptionType | null>(null);
    const [contactValue, setContactValue] = React.useState<ContactType | null>(null);

    const brokerIsValid = () => {
        return brokerValue
            && brokerValue.legalName
            && brokerValue.address
            && brokerValue.city
            && brokerValue.country;
    }

    return (
        <Card sx={{ marginTop: 4 }}>
            <CardContent>
                <Box sx={{ marginBottom: 4 }}>
                    <Typography variant='h5'>
                        Managing Broker
                    </Typography>
                    <Typography variant='subtitle2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing edit.
                    </Typography>
                </Box>
                <Box>
                    <CustomSelect value={brokerValue} setValue={(value) => setBrokerValue(value)} />
                    {
                        brokerIsValid() &&
                        <>
                            <Typography variant='caption'>
                                Address
                            </Typography>
                            <Typography variant='body2'  sx={{ marginBottom: 2 }}>
                                {brokerValue?.address}, {brokerValue?.city}
                            </Typography>
                            <Typography variant='caption'>
                                Country
                            </Typography>
                            <Typography variant='body2'  sx={{ marginBottom: 2 }}>
                                {brokerValue?.country}
                            </Typography>
                            <Autocomplete
                                value={contactValue}
                                options={contacts}
                                onChange={(event, newValue) => setContactValue(newValue)}
                                renderInput={(params) => <TextField {...params} label="Contact" />}
                                renderOption={(props, option) => <li key={option.fullName} {...props}>{option.fullName}</li>}
                                getOptionLabel={(option) => {
                                    // e.g. value selected with enter, right from the input
                                    if (typeof option === 'string') {
                                        return option;
                                    }
                                    return option.fullName;
                                }}
                                sx={{ marginBottom: 2 }}
                            />
                            <TextField
                                label="Commission"
                                InputProps={{
                                    endAdornment: <InputAdornment position='end'>%</InputAdornment>,
                                }}
                            />
                        </>
                    }
                </Box>
            </CardContent>
        </Card>
    )
}

interface ContactType {
    fullName: string;
    mail: string;
}

const contacts: readonly ContactType[] = [
    {
        fullName: 'Howard Hugues',
        mail: 'howard.hugues@robcoind.com',
    }
]