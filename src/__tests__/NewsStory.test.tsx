import { cleanup } from '@testing-library/react';
import { oneStory } from '../fixtures/fixtures';
import { getEachStory } from '../data/hackerNewsAPI';

beforeEach(() => {
    cleanup();
    jest.resetAllMocks();
});

jest.mock('../data/hackerNewsAPI', () => ({
    getEachStory: jest.fn(),
}));
const mockGetEachStory = getEachStory as jest.MockedFunction < typeof getEachStory>;

test('rendering News story component with content', async () => {

    mockGetEachStory.mockResolvedValue(oneStory);
    const getteststory = await getEachStory(1);
    expect(getEachStory).toHaveBeenCalledTimes(1);
    expect(getEachStory).toHaveBeenCalledWith(1)
    expect(getteststory).toMatchSnapshot();
});