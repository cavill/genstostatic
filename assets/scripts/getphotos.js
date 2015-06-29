var feed = new Instafeed({
    get: 'user',
    userId: 259347809,
    clientId: 'd8bca63cac2e416d89b9a66d2d24914f',
    accessToken: '259347809.467ede5.14eb449c0f114d0480582eda260993ea',
    // replace w general store's generated from the GS
    limit: 8,
    resolution: "low_resolution",
    template: '<li class="gram"><a href="{{link}}" title="General Store&#8217;s Photo" target="_blank" /><img src="{{image}}" /></li>'
});
feed.run();