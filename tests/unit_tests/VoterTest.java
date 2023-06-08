package urna.test;

import urna.Voter;
import urna.Warning;
import urna.Election;
import org.junit.*;

public class VoterTest {

    private Voter voter;
    private Election election;

    @Before
    public void setUp() {
        this.voter = new Voter.Builder()
                .electoralCard("card555555")
                .name("Lil' Flavio of the tire")
                .state("RR")
                .build();
        this.election = new Election.Builder()
                .password("senhafraca")
                .build();

        this.election.start("senhafraca");
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCannotCreateVoterWithoutElectoralCard() {
        Voter invalidVoter = new Voter.Builder()
                .electoralCard(null)
                .name("Shaolin the pig killer")
                .state("MT")
                .build();
    }

    @Test(expected = Warning.class)
    public void testVoteInvalidPresidentCandidate() {
        voter.vote(20, this.election, "President", false);
    }

    @Test(expected = Warning.class)
    public void testVoteInvalidFederalDeputyCandidate() {
        voter.vote(20, this.election, "FederalDeputy", false);
    }
}