# homebridge-alexa

Expose your [Amazon Echo Smart Home devices](https://www.amazon.com/alexa-smart-home/b?node=13575751011) to Siri and [HomeKit](https://www.apple.com/lae/ios/home/) by using a Raspberry PI to speak commands to a spare Amazon Echo using [Homebridge](https://github.com/nfarina/homebridge).

First get [Homebridge installed and running on your Raspberry PI](https://github.com/nfarina/homebridge/wiki/Running-HomeBridge-on-a-Raspberry-Pi).  Plug a speaker into the Raspberry PI and position it next to your Amazon Echo.  Ensure your speaker is used for [audio output](https://www.raspberrypi.org/documentation/configuration/audio-config.md).

Next clone this repository, and edit your Homebridge [config.json](https://github.com/nfarina/homebridge/blob/master/config-sample.json) to include your Amazon Echo Smart Home devices:

```
"description": "Name the devices the way you name them in Alexa.",
"accessories": [
        {
          "accessory": "AlexaSwitch",
          "name": "Kitchen"
        },
{
          "accessory": "AlexaSwitch",
          "name": "Bathroom"
        },
{
          "accessory": "AlexaSwitch",
          "name": "Everything"
        },
{
          "accessory": "AlexaSwitch",
          "name": "Lounge"
        }
    ]
}
```

Finally run homebridge, telling it about the Alexa plugin:

```
homebridge -D -P ~/homebridge-alexa/
```

