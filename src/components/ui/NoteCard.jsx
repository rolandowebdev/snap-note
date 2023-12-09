import {
  Box,
  Heading,
  IconButton,
  Card,
  CardBody,
  HStack,
  VStack,
  Text
} from '@chakra-ui/react'
import { CheckCircle, Circle, FileEdit, Trash } from 'lucide-react'
import { showFormattedDate } from '@/utils'
import { Link } from 'react-router-dom'

export const NoteCard = ({ id, title, body, createdAt, archived }) => {
  return (
    <Card
      w='full'
      cursor='default'
      bg='brand.softDark'
      color='brand.light'
      transitionDuration='300ms'
      _hover={{ bg: 'brand.border', transform: 'translateY(-2px)' }}>
      <CardBody display='flex' p={3} gap={3} justifyContent='space-between'>
        <HStack gap={3}>
          {archived ? (
            <IconButton
              aria-label='uncheck note'
              color='brand.light'
              variant='ghost'
              _hover={{ color: 'brand.success' }}>
              <CheckCircle />
            </IconButton>
          ) : (
            <IconButton
              aria-label='check note'
              color='brand.light'
              variant='ghost'
              _hover={{ color: 'brand.warning' }}>
              <Circle />
            </IconButton>
          )}
          <Box display='flex' flexDir='column' gap={2}>
            <Link to={`/detail/${id}`}>
              <Heading
                as='h2'
                fontSize='lg'
                fontWeight='600'
                display='inline-block'
                _hover={{ textDecor: 'underline' }}>
                {title}
              </Heading>
            </Link>
            <Text fontSize='sm' fontWeight='300'>
              {`${body.slice(0, 70)}...`}
            </Text>
          </Box>
        </HStack>
        <VStack>
          <Text fontSize='12px' fontWeight={700}>
            {showFormattedDate(createdAt)}
          </Text>
          <HStack gap={0}>
            <IconButton
              aria-label='edit note'
              color='brand.light'
              variant='ghost'
              _hover={{ color: 'brand.success' }}>
              <FileEdit />
            </IconButton>
            <IconButton
              aria-label='delete note'
              color='brand.light'
              variant='ghost'
              _hover={{ color: 'brand.danger' }}>
              <Trash />
            </IconButton>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}
