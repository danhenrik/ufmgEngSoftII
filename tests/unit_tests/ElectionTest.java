package urna.test;

import urna.Election;
import urna.Warning;
import org.junit.*;

public class ElectionTest {

    private Election election;

    @Before
    public void setUp() {
        this.election = new Election.Builder()
                .password("correctPassword")
                .build();
    }

    @Test
    public void testElectionIsNotActiveWhenCreated() {
        Assert.assertFalse(election.getStatus());
    }

    @Test
    public void testElectionStarts() {
        election.start("correctPassword");
        Assert.assertTrue(election.getStatus());
    }

    @Test
    public void testElectionEnds() {
        election.start("correctPassword");
        election.finish("correctPassword");
        Assert.assertFalse(election.getStatus());
    }

    @Test(expected = Warning.class)
    public void testStartWithWrongPassword() {
        election.start("wrongPassword");
    }

    @Test(expected = Warning.class)
    public void testEndWithWrongPassword() {
        election.start("correctPassword");
        election.finish("wrongPassword");
    }
}