// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Vendor
const assert = require( 'assert' );

// --------------------------------------------------
// INIT
// --------------------------------------------------
describe( 'String', () => {
    describe( '#substring()', () => {
        it( 'It should return the correct substring when given a start and end index.', () => {
            assert.equal( 'T', 'Test'.substring( 0, 1 ) );
        } );
    } );
} );