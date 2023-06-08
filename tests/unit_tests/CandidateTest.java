package urna.test;

import urna.Candidate;
import org.junit.*;

public class CandidateTest {
    
    private Candidate candidate;

    @Test(expected = IllegalArgumentException.class)
    public void testCreateCandidateWithoutName() {
        this.candidate = new Candidate(null, "partido e fatiado", 123);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCreateCandidateWithoutParty() {
        this.candidate = new Candidate("Claudio", "", 123);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testCreateCandidateWithNegativeNumber() {
        this.candidate = new Candidate("Claudia", "partido caminho é o fim", -5);
    }
}