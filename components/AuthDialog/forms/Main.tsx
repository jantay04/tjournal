import Button from '@mui/material/Button/Button'
import React from 'react'

type Props = {
    onOpenLogin: () => void
}

function MainForm({onOpenLogin }: Props) {
    return (
        <div>
            <Button className="mb-15" variant="contained" fullWidth>
                Вконтакте{" "}
            </Button>
            <Button className="mb-15" variant="contained" fullWidth>
                Google{" "}
            </Button>
            <Button onClick={onOpenLogin} className="mb-15" variant="contained" fullWidth>
                Через почту{" "}
            </Button>
        </div>
    )
}

export default MainForm