---
sidebar_label: 'How to Create Your Own Game'
sidebar_position: 3

id: pgeblog3
title: How to Create Your Own Game

slug: /howtocreateyourowngame

---
# How to Create Your Own Game

The Playard Game Engine is a game engine based on the speed of the C++ language and the flexibility of the XML language. It allows you to make impressive games by shortening the development process. To make great games with the Playard Game Engine, you just need to download the source codes and include them in your program.

## What Are Components and How to Use Them

Components is one of the innovative solutions of the Playard Game Engine. On PGE, everything is produced and arranged in the form of components.Different components created for figures, texts and images are arranged in the background and displayed on the screen. Components thus provide a cleaner working environment for the programmer.

To access the components in our program we must load related XML string with function loadXML.  

```cpp
```

### Layouts

Layouts are components that can contain component types, including layouts. Components can be grouped with layouts so that items on the screen can be aligned relative to each other or moved together. Each component has a parent layout, and the position of each component must be specified relative to the position of its parent. A layout has some attributes like "x-position", "y-position", "visibility" etc.

We can create a layout component in XML. It must has an ID.

```xml
<Main>
  <Layout
  id = 'mainLayout'
  x-position = '128'
  y-position = '64'>

  </Layout>
</Main>
```

 And now we can access our ball by call our getPointByID function with defined ID.

```cpp
const char* main_xml =
"<Main>"
"  <Layout"
"  id = 'mainLayout'"
"  x-position = '128'"
"  y-position = '64'>"
""
"  </Layout>"
"</Main>"
""
;

gfxEngine.loadXML(main_xml);
Layout* mainLayout = gfxEngine.findLayoutByID("mainLayout");
```

If we want to move our mainLayout up by 5 pixels, all we have to do change its vertical position.

```cpp
mainLayout->setY(mainLayout->getY() - 5);
```

### Points

Points are components that are represents the pixels on the screen.

To create a point all we need to do create a point tag and define an ID for it, in our mainLayout.

```xml
<Main>
  <Layout
    id = 'mainLayout'
    x-position = '128'
    y-position = '64'>
    <Point id = 'point1' x-position='24' y-position='24'/>
  </Layout>
</Main>
```

We can access our ball by call our getPointByID function with defined ID.

```cpp
const char* main_xml =
"<Main>"
"  <Layout"
"  id = 'mainLayout'"
"  x-position = '128'"
"  y-position = '64'>"
"    <Point id = 'point1' x-position='24' y-position='24'/>"
"  </Layout>"
"</Main>"
;

gfxEngine.loadXML(main_xml);
Point* point = gfxEngine.findPointByID("point1");
```

<img src='images/example_draw_pixel.png' height='200' />

For an example, if we want to hide our new point component we need set its visibility to 0.

```cpp
point->setVisibility(0);
```

### Rectangles

Rectangles are components for displaying rectangles on the screen. They have arguments named "x-position", "y-position", "border-radius" etc.

To display a rectangle on the screen, we need to create a rectangle tag in a layout.

```xml
<Main>
  <Layout
    id = 'mainLayout'
    x-position = '128'
    y-position = '64'>
    <Rectangle id = 'rect' x-position='64' y-position='32' width='42' height='24' border-radius='4'/>
  </Layout>
</Main>
```

We can access our ball by call our getRectangleByID function with defined ID.

```cpp
const char* main_xml =
"<Main>"
"  <Layout"
"    id = 'mainLayout'"
"    x-position = '128'"
"    y-position = '64'>"
"    <Rectangle id = 'rect' x-position='64' y-position='32' width='42' height='24' border-radius='4'/>"
"  </Layout>"
"</Main>"
;

gfxEngine.loadXML(main_xml);
Rectangle* rectangle = gfxEngine.getRectangleByID("rect");
```

Let's move our rectangle left by 10 pixels.

```cpp
rectangle->setX(rectangle->getX() + 10);
```

### Circles

We can draw circles on the screen with Circle components. A circle component has some attributes named "fill", "visibility", "radius" etc.

We need to create a Circle tag in a layout first.

```xml
<Main>
  <Layout
    id = 'mainLayout'
    x-position = '128'
    y-position = '64'>
    <Rectangle id = 'rect' x-position='64' y-position='32' width='42' height='24' border-radius='4'/>
    <Circle id='ball' x-position='112' y-position='48' radius='2' fill='1'/>
  </Layout>
</Main>
```

We can access our ball by call our getCircleByID function with defined ID.

```cpp
const char* game_xml =
"<Main>"
"  <Layout"
"    id = 'mainLayout'"
"    x-position = '128'"
"    y-position = '64'>"
"    <Rectangle id = 'rect' x-position='64' y-position='32' width='42' height='24' border-radius='4'/>"
"    <Circle id='ball' x-position='112' y-position='48' radius='2' fill='1'/>"
"  </Layout>"
"</Main>"
;

gfxEngine.loadXML(game_xml);
Circle* ball = getCircleByID("ball");
```

Let's enlarge our ball 1 pixel. We can increase radius of ball.

```cpp
ball->setRadius(ball->getRadius() + 1);
```

### Triangles

We may want to create some arrow signs or hats in our game. At this point, triangle components come to our aid.

To draw a triangle on the screen, all we need to do is write a Triangle tag in our XML string.

```xml
<Main>
  <Layout
    id = 'mainLayout'
    x-position = '128'
    y-position = '64'>
    <Rectangle id = 'rect' x-position='64' y-position='32' width='42' height='24' border-radius='4'/>
    <Circle id='ball' x-position='112' y-position='48' radius='2' fill='1'/>
    <Triangle id='arrow' x1='12' y1='24' x2='12' y2='36' x3='24' y3='36'/>
  </Layout>
</Main>
```

We can access our arrow by call our getTriangleByID function with defined ID.

```cpp
const char* arrow_game_xml =
"<Main>"
"  <Layout"
"    id = 'mainLayout'"
"    x-position = '128'"
"    y-position = '64'>"
"    <Rectangle id = 'rect' x-position='64' y-position='32' width='42' height='24' border-radius='4'/>"
"    <Circle id='ball' x-position='112' y-position='48' radius='2' fill='1'/>"
"    <Triangle id='arrow1' x1='12' y1='24' x2='12' y2='36' x3='24' y3='36'/>"
"  </Layout>"
"</Main>"
;

gfxEngine.loadXML(arrow_game_xml);
Triangle* arrow = gfxEngine.getTriangleByID("arrow");
```

If we want to hide when the arrow hits an enemy all we need to set its visibility to 0.

```cpp
if (hit) {
  arrow->setVisibility(0);
}
```

### Texts

We learned draw so many shapes on our screen. But we don't always want to draw a shape. Also we may need to show score or name on the screen. At this point text components are very useful.

We can create a new text by write a Text tag in our XML in the same way.

```xml
<Main>
  <Layout
    id = 'mainLayout'
    x-position = '128'
    y-position = '64'>
    <Text id='score' x-position='8' y-position='8' value='0'/>
  </Layout>
</Main>
```

```cpp
const char* score_xml =
"<Main>"
"  <Layout"
"    id = 'mainLayout'"
"    x-position = '128'"
"    y-position = '64'>"
"    <Text id='scoreText' x-position='8' y-position='8' value='0'/>"
"  </Layout>"
"</Main>"
;

gfxEngine.loadXML(score_xml);
Text* scoreText = gfxEngine.getTextByID("scoreText")
```

Let's increase our score by 1.

```cpp
score = 0;
scoreText->setValue(score);

score++; // Increase score by 1
scoreText->setValue(score);
```
