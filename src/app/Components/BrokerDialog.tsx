import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    TextField,
} from '@mui/material';

export default function BrokerDialog({ open, toggleOpen, returnValue }: BrokerDialogProps) {
    const [value, setValue] = React.useState({
        legalName: '',
        address: '',
        city: '',
        country: '',
    });

    const handleClose = () => {
        setValue({
            legalName: '',
            address: '',
            city: '',
            country: '',
        });
        toggleOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        returnValue(value);
        handleClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <form onSubmit={handleSubmit}>
                <DialogTitle>Add manually</DialogTitle>
                <TextField
                    autoFocus
                    id='name'
                    value={value.legalName}
                    onChange={(event) =>
                        setValue({
                            ...value,
                            legalName: event.target.value,
                        })
                    }
                    label="Legal name"
                    type="text"
                    sx={{
                        width: '566px',
                        marginLeft: 2,
                        marginBottom: 2,
                    }}
                />
                <TextField
                    autoFocus
                    id='address'
                    value={value.address}
                    onChange={(event) =>
                        setValue({
                            ...value,
                            address: event.target.value,
                        })
                    }
                    label="Address"
                    type="text"
                    sx={{
                        width: '566px',
                        marginLeft: 2,
                        marginBottom: 2,
                    }}
                />
                <TextField
                    autoFocus
                    id='city'
                    value={value.city}
                    onChange={(event) =>
                        setValue({
                            ...value,
                            city: event.target.value,
                        })
                    }
                    label="City"
                    type="text"
                    sx={{
                        width: '566px',
                        marginLeft: 2,
                        marginBottom: 2,
                    }}
                />
                <TextField
                    autoFocus
                    id='country'
                    value={value.country}
                    onChange={(event) =>
                        setValue({
                            ...value,
                            country: event.target.value,
                        })
                    }
                    label="Country"
                    type="text"
                    sx={{
                        width: '566px',
                        marginLeft: 2,
                        marginBottom: 2,
                    }}
                />
                <DialogActions>
                    <Button onClick={handleClose} sx={{ marginBottom: 2 }}>CANCEL</Button>
                    <Button type="submit" variant="contained" sx={{ marginRight: 2, marginBottom: 2 }}>SAVE</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

interface BrokerDialogProps {
    open: boolean;
    toggleOpen: (open: boolean) => void;
    returnValue: ({ legalName, address, city, country }: { legalName: string, address: string, city: string, country: string }) => void;
}