describe('tile-stitcher.js', function() {

  describe('stitch', function() {
    var ts = tileStitcher('src/tiles/{z}/{x}/{y}.png'),
        async = new AsyncSpec(this);

    async.it('should stitch tiles together in the proper order', function(done) {
      ts.stitch(19084, 24821, 19085, 24822, 16, function(stitchedCanvas) {
        ts._getImage('src/tiles/stitched.png', function(img) {
          var expectedCanvas = document.createElement('canvas'),
              expectedCtx, expectedImageData,
              stitchedCtx, stitchedImageData,
              i, len;

          expectedCanvas.width = img.width;
          expectedCanvas.height = img.height;

          // Copy the image contents to the canvas
          expectedCtx = expectedCanvas.getContext('2d');
          expectedCtx.drawImage(img, 0, 0);

          expectedImageData = expectedCtx.getImageData(0, 0, img.width, img.height);

          stitchedCtx = stitchedCanvas.getContext('2d');
          stitchedImageData = stitchedCtx.getImageData(0, 0, stitchedCanvas.width, stitchedCanvas.height);

          expect(stitchedImageData.data.length).toBe(expectedImageData.data.length);

          for(i=0, len=stitchedImageData.data.length; i<len; i++) {
            expect(stitchedImageData.data[i]).toBe(expectedImageData.data[i]);
          }

          done();
        });
      });
    });
  });

});