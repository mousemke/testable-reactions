
import assert   from 'assert';
import sinon    from 'sinon';


import Form from '/ui/components/Form';


describe( 'Form', () =>
{
    it( 'should have this stupid jquery crutch and jquery itself removed, but until then..', () =>
    {
        assert.equal( Form.prototype.refresh(), undefined );
    } );
} );
