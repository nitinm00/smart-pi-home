#include <Adafruit_AHTX0.h>
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>

Adafruit_AHTX0 aht;

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels
#define OLED_RESET -1   //   QT-PY / XIAO
#define i2c_Address 0x3c //initialize with the I2C addr 0x3C Typically eBay OLED's
#define PORT = 2400;

Adafruit_SH1106G display = Adafruit_SH1106G(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(PORT);
  Serial.println("Adafruit AHT10/AHT20 demo!");

  if (! aht.begin()) {
    Serial.println("Could not find AHT? Check wiring");
    while (1) delay(100);
  }
  Serial.println("AHT10 or AHT20 found");


  // Show image buffer on the display hardware.
  // Since the buffer is intialized with an Adafruit splashscreen
  // internally, this will display the splashscreen.

  delay(250); // wait for the OLED to power up
  display.begin(i2c_Address, true); // Address 0x3C default
 //display.setContrast (0); // dim display
 
  display.display();
  delay(2000);
  display.clearDisplay();
  int timer = 0;
  Serial.end(PORT);
}

void displayStats(sensors_event_t temp, sensors_event_t humidity)
{
  
  float fahrenheit = float(9*temp.temperature / 5) + 32.0;
  display.setTextSize(1);
  display.setTextColor(SH110X_WHITE);
  display.setCursor(0, 0);
  display.print("Temperature: "); display.print(fahrenheit); display.println(" degrees F.");
  display.print("Humidity: "); display.print(humidity.relative_humidity); display.println("%.");
  display.display();
}

void loop() {

  // put your main code here, to run repeatedly:
  sensors_event_t humidity, temp;
  aht.getEvent(&humidity, &temp);// populate temp and humidity objects with fresh data
  displayStats(temp, humidity);
  delay(100);
  display.clearDisplay();
  if (humidity.relative_humidity > 45)
  {
    Serial.begin(PORT);
    float fahrenheit = float(9*temp.temperature / 5) + 32.0;
    Serial.print("Temperature: "); Serial.print(fahrenheit); Serial.println(" degrees F.");
    Serial.print("Humidity: "); Serial.print(humidity.relative_humidity); Serial.println("%.");
    Serial.end(PORT);
  }
}





