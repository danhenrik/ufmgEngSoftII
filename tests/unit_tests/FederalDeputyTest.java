package urna.test;

import urna.FederalDeputy;
import org.junit.*;


public class FederalDeputyTest {

    private FederalDeputy federalDeputy;

    @Before
    public void setUp() {
        this.federalDeputy = new FederalDeputy.Builder()
                .name("Jose")
                .number(1234)
                .party("partido dos destruidores")
                .state("AL")
                .build();
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCreateFederalDeputyWithInvalidState() {
        FederalDeputy invalidTexanFederalDeputy = new FederalDeputy.Builder()
                .name("Chris")
                .number(1234)
                .party("Texan Party")
                .state("TX")
                .build();
    }

    @Test
    public void testFederalDeputyToString() {
        String expectedString = "Josepartido dos destruidores1234AL";
        Assert.assertEquals(federalDeputy.toString(), expectedString);
    }

    @Test
    public void testCanIdentifyEqualFederalDeputy() {
        FederalDeputy evilDoppelganger = new FederalDeputy.Builder()
                .name("Jose")
                .number(1234)
                .party("partido dos destruidores")
                .state("AL")
                .build();
        Assert.assertTrue(federalDeputy.equals(evilDoppelganger));
    }

    @Test
    public void testCanRejectInvalidComparison() {
        int somethingThatIsNotAFederalDeputy = 6;
        Assert.assertFalse(federalDeputy.equals(somethingThatIsNotAFederalDeputy));
    }
}