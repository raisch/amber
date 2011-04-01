smalltalk.addClass('Counter', smalltalk.Widget, ['count'], 'Examples');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function () {
    var self = this;
    self.klass.superclass.fn.prototype._initialize.apply(self, []);
    self['@count'] = 0;
    return self;
},
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20count%20%3A%3D%200%0A')}),
smalltalk.Counter);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
category: 'rendering',
fn: function (html) {
    var self = this;
    html._h1()._with_(self['@count']._asString());
    (function ($rec) {$rec._with_(unescape("++"));return $rec._onClick_(function () {return self._increase();});}(html._button()));
    (function ($rec) {$rec._with_(unescape("--"));return $rec._onClick_(function () {return self._decrease();});}(html._button()));
    return self;
},
source: unescape('renderOn%3A%20html%0A%20%20%20%20html%20h1%20with%3A%20count%20asString.%0A%20%20%20%20html%20button%0A%09with%3A%20%27++%27%3B%0A%09onClick%3A%20%5Bself%20increase%5D.%0A%20%20%20%20html%20button%0A%09with%3A%20%27--%27%3B%0A%09onClick%3A%20%5Bself%20decrease%5D%0A')}),
smalltalk.Counter);

smalltalk.addMethod(
'_increase',
smalltalk.method({
selector: 'increase',
category: 'actions',
fn: function () {
    var self = this;
    self['@count'] = self['@count'].__plus(1);
    self._update();
    return self;
},
source: unescape('increase%0A%20%20%20%20count%20%3A%3D%20count%20+%201.%0A%20%20%20%20self%20update%0A')}),
smalltalk.Counter);

smalltalk.addMethod(
'_decrease',
smalltalk.method({
selector: 'decrease',
category: 'actions',
fn: function () {
    var self = this;
    self['@count'] = self['@count'].__minus(1);
    self._update();
    return self;
},
source: unescape('decrease%0A%20%20%20%20count%20%3A%3D%20count%20-%201.%0A%20%20%20%20self%20update%0A')}),
smalltalk.Counter);



smalltalk.addClass('Tetris', smalltalk.Widget, ['renderingContext', 'timer', 'speed', 'score', 'rows', 'movingPiece'], 'Examples');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {$rec._class_("tetris");return $rec._with_(function () {html._h3()._with_("Tetris");self._renderCanvasOn_(html);return self._renderButtonsOn_(html);});}(html._div()));
    return self;
},
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27tetris%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20h3%20with%3A%20%27Tetris%27.%0A%09%09%09self%20renderCanvasOn%3A%20html.%0A%09%09%09self%20renderButtonsOn%3A%20html%5D')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_renderCanvasOn_',
smalltalk.method({
selector: 'renderCanvasOn:',
category: 'rendering',
fn: function (html) {
    var self = this;
    var canvas = nil;
    canvas = html._canvas();
    canvas._at_put_("width", self._width()._asString());
    canvas._at_put_("height", self._height()._asString());
    self['@renderingContext'] = smalltalk.CanvasRenderingContext._tagBrush_(canvas);
    self._redraw();
    return self;
},
source: unescape('renderCanvasOn%3A%20html%0A%09%7C%20canvas%20%7C%0A%09canvas%20%3A%3D%20html%20canvas.%0A%09canvas%20at%3A%20%27width%27%20put%3A%20self%20width%20asString.%0A%09canvas%20at%3A%20%27height%27%20put%3A%20self%20height%20asString.%0A%09renderingContext%20%3A%3D%20CanvasRenderingContext%20tagBrush%3A%20canvas.%0A%09self%20redraw')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
category: 'rendering',
fn: function (html) {
    var self = this;
    (function ($rec) {$rec._class_("tetris_buttons");return $rec._with_(function () {(function ($rec) {$rec._with_("New game");return $rec._onClick_(function () {return self._startNewGame();});}(html._button()));return function ($rec) {$rec._with_(unescape("play/pause"));return $rec._onClick_(function () {return self._update();});}(html._button());});}(html._div()));
    return self;
},
source: unescape('renderButtonsOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27tetris_buttons%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20button%0A%09%09%09%09with%3A%20%27New%20game%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20startNewGame%5D.%0A%09%09%09html%20button%0A%09%09%09%09with%3A%20%27play/pause%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20update%5D%5D')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function () {
    var self = this;
    self.klass.superclass.fn.prototype._initialize.apply(self, []);
    self._newGame();
    return self;
},
source: unescape('initialize%0A%09super%20initialize.%0A%09self%20newGame')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_startNewGame',
smalltalk.method({
selector: 'startNewGame',
category: 'actions',
fn: function () {
    var self = this;
    self._newGame();
    self['@timer']._ifNotNil_(function () {return self['@timer']._clearInterval();});
    self['@timer'] = function () {return self._nextStep();}._valueWithInterval_(self['@speed']);
    return self;
},
source: unescape('startNewGame%0A%09self%20newGame.%0A%09timer%20ifNotNil%3A%20%5Btimer%20clearInterval%5D.%0A%09timer%20%3A%3D%20%5Bself%20nextStep%5D%20valueWithInterval%3A%20speed')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_width',
smalltalk.method({
selector: 'width',
category: 'accessing',
fn: function () {
    var self = this;
    return self._class()._width();
    return self;
},
source: unescape('width%0A%09%5Eself%20class%20width')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
category: 'accessing',
fn: function () {
    var self = this;
    return self._class()._height();
    return self;
},
source: unescape('height%0A%09%5Eself%20class%20height')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_nextStep',
smalltalk.method({
selector: 'nextStep',
category: 'actions',
fn: function () {
    var self = this;
    self['@movingPiece']._ifNil_(function () {return self._newPiece();});
    self['@movingPiece']._canMoveIn_(self)._ifTrue_ifFalse_(function () {return self['@movingPiece']._position_(self['@movingPiece']._position().__plus((0).__at(1)));}, function () {return self._newPiece();});
    self._redraw();
    return self;
},
source: unescape('nextStep%0A%09movingPiece%20ifNil%3A%20%5Bself%20newPiece%5D.%0A%09%28movingPiece%20canMoveIn%3A%20self%29%0A%09%09ifTrue%3A%20%5BmovingPiece%20position%3A%20movingPiece%20position%20+%20%280@1%29%5D%0A%09%09ifFalse%3A%20%5Bself%20newPiece%5D.%0A%09self%20redraw%0A%09')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_redraw',
smalltalk.method({
selector: 'redraw',
category: 'actions',
fn: function () {
    var self = this;
    self['@renderingContext']._clearRectFrom_to_((0).__at(self._width()), (0).__at(self._height()));
    (function ($rec) {$rec._drawMap();return $rec._drawPiece();}(self));
    return self;
},
source: unescape('redraw%0A%09renderingContext%20clearRectFrom%3A%200@%20self%20width%20to%3A%200@%20self%20height.%0A%09self%20%0A%09%09drawMap%3B%0A%09%09drawPiece')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_drawMap',
smalltalk.method({
selector: 'drawMap',
category: 'actions',
fn: function () {
    var self = this;
    (function ($rec) {$rec._fillStyle_(unescape("%23fafafa"));return $rec._fillRectFrom_to_((0).__at(0), self._width().__at(self._height()));}(self['@renderingContext']));
    (function ($rec) {$rec._lineWidth_(0.5);return $rec._strokeStyle_(unescape("%23999"));}(self['@renderingContext']));
    (0)._to_do_(self._class()._squares()._x(), function (each) {var x = nil;x = each.__star(self._class()._squareSize());return self._drawLineFrom_to_(x.__at(0), x.__at(self._height()));});
    (0)._to_do_(self._class()._squares()._y(), function (each) {var y = nil;y = each.__star(self._class()._squareSize());return self._drawLineFrom_to_((0).__at(y), self._width().__at(y));});
    return self;
},
source: unescape('drawMap%0A%09renderingContext%20%0A%09%09fillStyle%3A%20%27%23fafafa%27%3B%0A%09%09fillRectFrom%3A%200@0%20to%3A%20self%20width@self%20height.%0A%09renderingContext%20%0A%09%09lineWidth%3A%200.5%3B%0A%09%09strokeStyle%3A%20%27%23999%27.%0A%090%20to%3A%20self%20class%20squares%20x%20do%3A%20%5B%3Aeach%20%7C%20%7C%20x%20%7C%0A%09%09x%20%3A%3D%20each%20*%20self%20class%20squareSize.%0A%09%09self%20drawLineFrom%3A%20x@0%20to%3A%20x@self%20height%5D.%0A%090%20to%3A%20self%20class%20squares%20y%20do%3A%20%5B%3Aeach%20%7C%20%7C%20y%20%7C%0A%09%09y%20%3A%3D%20each%20*%20self%20class%20squareSize.%0A%09%09self%20drawLineFrom%3A%200@y%20to%3A%20self%20width@y%5D.')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_drawLineFrom_to_',
smalltalk.method({
selector: 'drawLineFrom:to:',
category: 'actions',
fn: function (aPoint, anotherPoint) {
    var self = this;
    (function ($rec) {$rec._beginPath();$rec._moveTo_(aPoint);$rec._lineTo_(anotherPoint);return $rec._stroke();}(self['@renderingContext']));
    return self;
},
source: unescape('drawLineFrom%3A%20aPoint%20to%3A%20anotherPoint%0A%09renderingContext%20%0A%09%09beginPath%3B%0A%09%09moveTo%3A%20aPoint%3B%0A%09%09lineTo%3A%20anotherPoint%3B%0A%09%09stroke')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_newGame',
smalltalk.method({
selector: 'newGame',
category: 'actions',
fn: function () {
    var self = this;
    self['@rows'] = [];
    self['@movingPiece'] = nil;
    self['@speed'] = 200;
    self['@score'] = 0;
    return self;
},
source: unescape('newGame%0A%09rows%20%3A%3D%20%23%28%29.%0A%09movingPiece%20%3A%3D%20nil.%0A%09speed%20%3A%3D%20200.%0A%09score%20%3A%3D%200')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_newPiece',
smalltalk.method({
selector: 'newPiece',
category: 'actions',
fn: function () {
    var self = this;
    self['@movingPiece'] = smalltalk.TetrisPiece._atRandom();
    return self;
},
source: unescape('newPiece%0A%09movingPiece%20%3A%3D%20TetrisPiece%20atRandom')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_squares',
smalltalk.method({
selector: 'squares',
category: 'accessing',
fn: function () {
    var self = this;
    return self._class()._squares();
    return self;
},
source: unescape('squares%0A%09%5Eself%20class%20squares')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_gluePiece_',
smalltalk.method({
selector: 'gluePiece:',
category: 'accessing',
fn: function (aPiece) {
    var self = this;
    aPiece._glueOn_(self);
    return self;
},
source: unescape('gluePiece%3A%20aPiece%0A%09aPiece%20glueOn%3A%20self%0A%09')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_drawRows',
smalltalk.method({
selector: 'drawRows',
category: 'actions',
fn: function () {
    var self = this;
    self._rows()._do_(function (each) {return nil;});
    self['@movingPiece']._ifNotNil_(function () {return self['@movingPiece']._drawOn_(self['@renderingContext']);});
    return self;
},
source: unescape('drawRows%0A%09self%20rows%20do%3A%20%5B%3Aeach%20%7C%5D.%0A%09movingPiece%20ifNotNil%3A%20%5BmovingPiece%20drawOn%3A%20renderingContext%5D')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_drawPiece',
smalltalk.method({
selector: 'drawPiece',
category: 'actions',
fn: function () {
    var self = this;
    self['@movingPiece']._ifNotNil_(function () {return self['@movingPiece']._drawOn_(self['@renderingContext']);});
    return self;
},
source: unescape('drawPiece%0A%09movingPiece%20ifNotNil%3A%20%5B%0A%09%09movingPiece%20drawOn%3A%20renderingContext%5D')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_rows',
smalltalk.method({
selector: 'rows',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@rows'];
    return self;
},
source: unescape('rows%0A%09%22An%20array%20of%20rows.%20Each%20row%20is%20a%20collection%20of%20points.%22%0A%09%5Erows')}),
smalltalk.Tetris);

smalltalk.addMethod(
'_addRow_',
smalltalk.method({
selector: 'addRow:',
category: 'accessing',
fn: function (aCollection) {
    var self = this;
    self._rows()._add_(aCollection);
    return self;
},
source: unescape('addRow%3A%20aCollection%0A%09self%20rows%20add%3A%20aCollection')}),
smalltalk.Tetris);


smalltalk.addMethod(
'_squareSize',
smalltalk.method({
selector: 'squareSize',
category: 'accessing',
fn: function () {
    var self = this;
    return 22;
    return self;
},
source: unescape('squareSize%0A%09%5E22')}),
smalltalk.Tetris.klass);

smalltalk.addMethod(
'_width',
smalltalk.method({
selector: 'width',
category: 'accessing',
fn: function () {
    var self = this;
    return self._squareSize().__star(self._squares()._x());
    return self;
},
source: unescape('width%0A%09%5Eself%20squareSize%20*%20%28self%20squares%20x%29')}),
smalltalk.Tetris.klass);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
category: 'accessing',
fn: function () {
    var self = this;
    return self._squareSize().__star(self._squares()._y());
    return self;
},
source: unescape('height%0A%09%5Eself%20squareSize%20*%20%28self%20squares%20y%29')}),
smalltalk.Tetris.klass);

smalltalk.addMethod(
'_squares',
smalltalk.method({
selector: 'squares',
category: 'accessing',
fn: function () {
    var self = this;
    return (10).__at(15);
    return self;
},
source: unescape('squares%0A%09%5E10@15')}),
smalltalk.Tetris.klass);


smalltalk.addClass('TetrisPiece', smalltalk.Widget, ['rotation', 'position'], 'Examples');
smalltalk.addMethod(
'_drawOn_',
smalltalk.method({
selector: 'drawOn:',
category: 'drawing',
fn: function (aRenderingContext) {
    var self = this;
    aRenderingContext._fillStyle_(self._color());
    self._bounds()._do_(function (each) {return function ($rec) {$rec._fillRectFrom_to_(each.__plus(self._position()).__star(smalltalk.Tetris._squareSize()), (1).__at(1).__star(smalltalk.Tetris._squareSize()));$rec._strokeStyle_(unescape("%23999"));$rec._lineWidth_(2);return $rec._strokeRectFrom_to_(each.__plus(self._position()).__star(smalltalk.Tetris._squareSize()), (1).__at(1).__star(smalltalk.Tetris._squareSize()));}(aRenderingContext);});
    return self;
},
source: unescape('drawOn%3A%20aRenderingContext%0A%09aRenderingContext%20fillStyle%3A%20self%20color.%0A%09self%20bounds%20do%3A%20%5B%3Aeach%20%7C%0A%09%09aRenderingContext%20%0A%09%09%09fillRectFrom%3A%20each%20+%20self%20position*%20Tetris%20squareSize%20to%3A%201@1%20*%20Tetris%20squareSize%3B%0A%09%09%09strokeStyle%3A%20%27%23999%27%3B%0A%09%09%09lineWidth%3A%202%3B%0A%09%09%09strokeRectFrom%3A%20each%20+%20self%20position*%20Tetris%20squareSize%20to%3A%201@1%20*%20Tetris%20squareSize%5D')}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_rotation',
smalltalk.method({
selector: 'rotation',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@rotation']._ifNil_(function () {return self['@rotation'] = 1;});
    return self;
},
source: unescape('rotation%0A%09%5Erotation%20ifNil%3A%20%5Brotation%20%3A%3D%201%5D')}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_rotation_',
smalltalk.method({
selector: 'rotation:',
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self['@rotation'] = aNumber;
    return self;
},
source: unescape('rotation%3A%20aNumber%0A%09rotation%20%3A%3D%20aNumber')}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_position',
smalltalk.method({
selector: 'position',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@position']._ifNil_(function () {return smalltalk.Tetris._squares()._x().__slash(2).__minus(1).__at(0);});
    return self;
},
source: unescape('position%0A%09%5Eposition%20ifNil%3A%20%5B%28Tetris%20squares%20x%20/%202%29%20-1%20@%200%5D')}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_position_',
smalltalk.method({
selector: 'position:',
category: 'accessing',
fn: function (aPoint) {
    var self = this;
    return self['@position'] = aPoint;
    return self;
},
source: unescape('position%3A%20aPoint%0A%09%5Eposition%20%3A%3D%20aPoint')}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
category: 'accessing',
fn: function () {
    var self = this;
    self._subclassResponsibility();
    return self;
},
source: unescape('bounds%0A%09self%20subclassResponsibility')}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_color',
smalltalk.method({
selector: 'color',
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%23afa");
    return self;
},
source: unescape('color%0A%09%5E%27%23afa%27')}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_canMove',
smalltalk.method({
selector: 'canMove',
category: 'testing',
fn: function () {
    var self = this;
    return self._position()._y().__lt(smalltalk.Tetris._squares()._y().__minus(self._height()));
    return self;
},
source: unescape('canMove%0A%09%5Eself%20position%20y%20%3C%20%28Tetris%20squares%20y%20-%20self%20height%29')}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
category: 'accessing',
fn: function () {
    var self = this;
    return 2;
    return self;
},
source: unescape('height%0A%09%5E2')}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
'_canMoveIn_',
smalltalk.method({
selector: 'canMoveIn:',
category: 'testing',
fn: function (aTetris) {
    var self = this;
    return self._position()._y().__lt(aTetris._squares()._y().__minus(self._height()));
    return self;
},
source: unescape('canMoveIn%3A%20aTetris%0A%09%5Eself%20position%20y%20%3C%20%28aTetris%20squares%20y%20-%20self%20height%29')}),
smalltalk.TetrisPiece);


smalltalk.addMethod(
'_atRandom',
smalltalk.method({
selector: 'atRandom',
category: 'instance creation',
fn: function () {
    var self = this;
    return self._subclasses()._at_(self._subclasses()._size()._atRandom())._new();
    return self;
},
source: unescape('atRandom%0A%09%5E%28self%20subclasses%20at%3A%20self%20subclasses%20size%20atRandom%29%20new')}),
smalltalk.TetrisPiece.klass);


smalltalk.addClass('TetrisPieceO', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
category: 'accessing',
fn: function () {
    var self = this;
    return function ($rec) {$rec._add_((0).__at(0));$rec._add_((0).__at(1));$rec._add_((1).__at(0));$rec._add_((1).__at(1));return $rec._yourself();}(smalltalk.Array._new());
    return self;
},
source: unescape('bounds%0A%09%5EArray%20new%0A%09%09add%3A%200@0%3B%0A%09%09add%3A%200@1%3B%0A%09%09add%3A%201@0%3B%0A%09%09add%3A%201@1%3B%0A%09%09yourself')}),
smalltalk.TetrisPieceO);



smalltalk.addClass('TetrisPieceL', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
category: 'accessing',
fn: function () {
    var self = this;
    return function ($rec) {$rec._add_((0).__at(0));$rec._add_((0).__at(1));$rec._add_((0).__at(2));$rec._add_((1).__at(2));return $rec._yourself();}(smalltalk.Array._new());
    return self;
},
source: unescape('bounds%0A%09%5EArray%20new%0A%09%09add%3A%200@0%3B%0A%09%09add%3A%200@1%3B%0A%09%09add%3A%200@2%3B%0A%09%09add%3A%201@2%3B%0A%09%09yourself')}),
smalltalk.TetrisPieceL);

smalltalk.addMethod(
'_color',
smalltalk.method({
selector: 'color',
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%23ffa");
    return self;
},
source: unescape('color%0A%09%5E%27%23ffa%27')}),
smalltalk.TetrisPieceL);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
category: 'accessing',
fn: function () {
    var self = this;
    return 3;
    return self;
},
source: unescape('height%0A%09%5E3')}),
smalltalk.TetrisPieceL);



smalltalk.addClass('TetrisPieceJ', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
'_color',
smalltalk.method({
selector: 'color',
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%23aaf");
    return self;
},
source: unescape('color%0A%09%5E%27%23aaf%27')}),
smalltalk.TetrisPieceJ);

smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
category: 'accessing',
fn: function () {
    var self = this;
    return function ($rec) {$rec._add_((1).__at(0));$rec._add_((1).__at(1));$rec._add_((1).__at(2));$rec._add_((0).__at(2));return $rec._yourself();}(smalltalk.Array._new());
    return self;
},
source: unescape('bounds%0A%09%5EArray%20new%0A%09%09add%3A%201@0%3B%0A%09%09add%3A%201@1%3B%0A%09%09add%3A%201@2%3B%0A%09%09add%3A%200@2%3B%0A%09%09yourself')}),
smalltalk.TetrisPieceJ);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
category: 'accessing',
fn: function () {
    var self = this;
    return 3;
    return self;
},
source: unescape('height%0A%09%5E3')}),
smalltalk.TetrisPieceJ);



smalltalk.addClass('TetrisPieceI', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
'_color',
smalltalk.method({
selector: 'color',
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%23faa");
    return self;
},
source: unescape('color%0A%09%5E%27%23faa%27')}),
smalltalk.TetrisPieceI);

smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
category: 'accessing',
fn: function () {
    var self = this;
    return function ($rec) {$rec._add_((0).__at(0));$rec._add_((0).__at(1));$rec._add_((0).__at(2));$rec._add_((0).__at(3));return $rec._yourself();}(smalltalk.Array._new());
    return self;
},
source: unescape('bounds%0A%09%5EArray%20new%0A%09%09add%3A%200@0%3B%0A%09%09add%3A%200@1%3B%0A%09%09add%3A%200@2%3B%0A%09%09add%3A%200@3%3B%0A%09%09yourself')}),
smalltalk.TetrisPieceI);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
category: 'accessing',
fn: function () {
    var self = this;
    return 4;
    return self;
},
source: unescape('height%0A%09%5E4')}),
smalltalk.TetrisPieceI);



smalltalk.addClass('TetrisPieceT', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
'_bounds',
smalltalk.method({
selector: 'bounds',
category: 'accessing',
fn: function () {
    var self = this;
    return function ($rec) {$rec._add_((0).__at(0));$rec._add_((1).__at(0));$rec._add_((2).__at(0));$rec._add_((1).__at(1));return $rec._yourself();}(smalltalk.Array._new());
    return self;
},
source: unescape('bounds%0A%09%5EArray%20new%0A%09%09add%3A%200@0%3B%0A%09%09add%3A%201@0%3B%0A%09%09add%3A%202@0%3B%0A%09%09add%3A%201@1%3B%0A%09%09yourself')}),
smalltalk.TetrisPieceT);

smalltalk.addMethod(
'_color',
smalltalk.method({
selector: 'color',
category: 'accessing',
fn: function () {
    var self = this;
    return unescape("%23aaf");
    return self;
},
source: unescape('color%0A%09%5E%27%23aaf%27')}),
smalltalk.TetrisPieceT);



