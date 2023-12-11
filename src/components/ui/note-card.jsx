import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import {
  Heading,
  IconButton,
  Card,
  CardBody,
  HStack,
  VStack,
  Text,
  Link
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CheckCircle, Circle } from 'lucide-react'
import { FormUpdate } from './form-update'
import { AlertDialog } from './alert-dialog'
import { showFormattedDate } from '@/utils/formattedDate'
import { useNotes } from '@/context'

export const NoteCard = ({ id, title, body, createdAt, archived }) => {
  const { deleteNote, archiveNote } = useNotes()
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
              variant='ghost'
              aria-label='uncheck note'
              color='brand.light'
              _hover={{ color: 'brand.success' }}
              _active={{ bgColor: 'transparent' }}
              onClick={() => archiveNote(id)}
              icon={<CheckCircle />}
            />
          ) : (
            <IconButton
              variant='ghost'
              aria-label='check note'
              color='brand.light'
              _hover={{ color: 'brand.warning' }}
              _active={{ bgColor: 'transparent' }}
              onClick={() => archiveNote(id)}
              icon={<Circle />}
            />
          )}
          <Link
            as={RouterLink}
            to={`/detail/${id}`}
            display='flex'
            flexDir='column'
            gap={2}
            _hover={{ textDecor: 'underline' }}
            _active={{ bgColor: 'transparent' }}>
            <Heading as='h2' fontSize='lg' fontWeight='600'>
              {title}
            </Heading>
            <Text fontSize='sm' fontWeight='300'>
              {parse(
                `${body.length > 55 ? body.slice(0, 55) : body}${
                  body.length > 55 ? '...' : ''
                }`
              )}
            </Text>
          </Link>
        </HStack>
        <VStack>
          <Text fontSize='12px' fontWeight={700}>
            {showFormattedDate(createdAt)}
          </Text>
          <HStack gap={0}>
            <FormUpdate noteId={id} />
            <AlertDialog
              title='Note'
              description='Are you sure you want to delete this note?'
              onDelete={() => deleteNote(id)}
            />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired
}
