const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Statik dosyalara hizmet vermek için public dizinini kullan
app.use(express.static(path.join(__dirname, 'public')));

// JSON verileri için express.json() kullan
app.use(express.json());

app.post('/save-contact', (req, res) => {
    const { firstName, lastName, phone } = req.body;
    if (!firstName || !lastName || !phone) {
        return res.status(400).send('Tüm alanlar gereklidir');
    }
    const contact = `${firstName},${lastName},${phone}\n`;
    fs.appendFile('hesap.txt', contact, (err) => {
        if (err) {
            console.error('Kişi kaydedilemedi:', err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});

app.post('/delete-contact', (req, res) => {
    const { firstName, lastName, phone } = req.body;
    if (!firstName || !lastName || !phone) {
        return res.status(400).send('Tüm alanlar gereklidir');
    }
    fs.readFile('hesap.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Dosya okunamadı:', err);
            return res.sendStatus(500);
        }
        const contacts = data.split('\n').filter(line => line.trim() !== '');
        const updatedContacts = contacts.filter(contact => {
            const [fName, lName, p] = contact.split(',');
            return !(fName === firstName && lName === lastName && p === phone);
        });
        fs.writeFile('hesap.txt', updatedContacts.join('\n'), (err) => {
            if (err) {
                console.error('Dosya güncellenemedi:', err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        });
    });
});

app.get('/get-contacts', (req, res) => {
    fs.readFile('hesap.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Dosya okunamadı:', err);
            return res.sendStatus(500);
        }
        const contacts = data.split('\n').filter(line => line.trim() !== '').map(contact => {
            const [firstName, lastName, phone] = contact.split(',');
            return { firstName, lastName, phone };
        });
        res.json(contacts);
    });
});

app.listen(port, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
