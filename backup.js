router.post('/find', async (req, res) => {
    let user = 0;
    try {
        User.find((error, result) => {
            result.forEach(e => {
                if (req.body.userName == e.userName) {
                    user = e;

                    return;
                }
            })
        })
        if (user == 0);
        user = await User.create(req.body);
        console.log('user----', user);
        console.log('000000', user.location.coordinates[0], '111111', user.location.coordinates[1]);
        Pump.find({
            // name: { $ne: req.pteroldb.PumpName },
            location: {
                $near: {
                    $maxDistance: 1000000,
                    $geometry: {
                        type: "Point",
                        coordinates: [user.location.coordinates[0], user.location.coordinates[1]]
                    }
                }
            }
        }).limit(5).find((error, result) => {
            if (error) console.log(error);
            console.log('result------', result);
            console.log('error--------', error);
            res.send(result);
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'server error' })
    }
});